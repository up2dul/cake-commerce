export interface ApiResponse<T> {
	success: boolean;
	data?: T;
	message?: string;
	code?: ErrorCode;
	errors?: Array<{
		error: string;
		message: string;
	}>;
}

export interface CurrencyAmount {
	amount: string;
	currencyCode: string;
}

export interface Image {
	id: string;
	url: string;
	width: number;
	height: number;
	altText?: string;
}

export interface PreviewImage {
	url: string;
	altText?: string;
	id: string;
	width: number;
	height: number;
}

export type ErrorCode = 0 | 2 | 3 | 4 | 5 | 6;
