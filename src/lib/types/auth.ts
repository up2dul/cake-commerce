export interface AuthToken {
	accessToken: string;
	expiresAt: string;
}

export interface LoginRequest {
	email: string;
	password: string;
}

export interface RegisterRequest {
	email: string;
	password: string;
	first_name: string;
	last_name: string;
}

export interface Customer {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	displayName: string;
}
