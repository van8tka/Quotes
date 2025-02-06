import {makeAutoObservable, runInAction} from 'mobx';
import { QuotationDto } from './dto.ts';

export class QuotesStore {
  quotes: QuotationDto[] = [];
  previousQuotes: QuotationDto[] = [];
  loading: boolean = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  fetchQuotes = async () => {
    this.loading = true;
    this.error = null;

    try {
      const response = await fetch('https://futures-api.poloniex.com/api/v2/tickers');
      const data = await response.json();
      if (data.code === '200000') {
        if(this.quotes.length > 0) {
          this.previousQuotes = [...this.quotes];
        }
        runInAction( () => {
          this.quotes = data.data;
        });

      } else {
        throw new Error(data.msg || 'Unknown error');
      }
    } catch (error) {
      runInAction( () => {
        this.error = error instanceof Error ? error.message : 'Unknown error';
      });
    } finally {
      runInAction( () => {
        this.loading = false;
      });
    }
  };

  get cachedQuotes() {
    return this.previousQuotes;
  }
}

const quotesStore = new QuotesStore();
export default quotesStore;
