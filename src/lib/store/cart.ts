"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { Cart, CartLine } from "@/lib/types/cart";

interface CartState {
	cartId: string | null;
	lines: CartLine[];
	subtotal: number;
	isOpen: boolean;
	isLoading: boolean;
	error: string | null;

	// Actions
	updateCart: (cartData: Cart) => void;
	clearCart: () => void;
	setCartId: (cartId: string) => void;
	setLines: (lines: CartLine[]) => void;
	setIsOpen: (isOpen: boolean) => void;
	setIsLoading: (isLoading: boolean) => void;
	setError: (error: string | null) => void;
}

export const useCart = create<CartState>()(
	persist(
		(set, _get) => ({
			cartId: null,
			lines: [],
			subtotal: 0,
			isOpen: false,
			isLoading: false,
			error: null,

			updateCart: (cartData: Cart) => {
				const lines = cartData.lines.nodes;
				const subtotal = lines.reduce((sum, line) => {
					const price = Number(line.merchandise.price?.amount) || 0;
					return sum + price * line.quantity;
				}, 0);

				set({
					cartId: cartData.id,
					lines,
					subtotal,
				});
			},

			clearCart: () => {
				set({
					cartId: null,
					lines: [],
					subtotal: 0,
					isOpen: false,
					error: null,
				});
			},

			setCartId: (cartId: string) => set({ cartId }),
			setLines: (lines: CartLine[]) => {
				const subtotal = lines.reduce((sum, line) => {
					const price = Number(line.merchandise.price?.amount) || 0;
					return sum + price * line.quantity;
				}, 0);
				set({ lines, subtotal });
			},
			setIsOpen: (isOpen: boolean) => set({ isOpen }),
			setIsLoading: (isLoading: boolean) => set({ isLoading }),
			setError: (error: string | null) => set({ error }),
		}),
		{
			name: "cake-commerce-cart",
			storage: createJSONStorage(() => localStorage),
			partialize: state => ({
				cartId: state.cartId,
			}),
		},
	),
);
