import {QuotationDto} from './dto.ts';

export interface QuotationModel extends QuotationDto {
  percentChange: string
}

export function getQuotationData(quotation: QuotationDto, previousPrice: number): QuotationModel {
  const lastPrice = parseFloat(quotation.price);
  const percent = previousPrice ? ((lastPrice - previousPrice) / previousPrice) * 100 : 0;
  const percentChange = percent !== 0 ? percent.toFixed(2) : '0';

  return {...quotation, percentChange: percentChange};
}
