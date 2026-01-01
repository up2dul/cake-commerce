"use client";

import { SignOutIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { logoutUser } from "@/app/actions/auth";
import { Button } from "@/components/ui/button";

export function LogoutButton() {
	const [isLoading, setIsLoading] = useState(false);

	const handleLogout = async () => {
		setIsLoading(true);
		await logoutUser();
	};

	return (
		<Button onClick={handleLogout} disabled={isLoading} variant="destructive">
			<SignOutIcon size={18} weight="bold" />
			{isLoading ? "LOGGING OUT..." : "LOGOUT"}
		</Button>
	);
}
