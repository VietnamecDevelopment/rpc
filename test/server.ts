import { init } from "@the-minimal/protocol";
import { serve } from "bun";
import { callProcedure, protocolProcedure, registerProcedures } from "../src";
import { userRegisterContract } from "./contract";

const userRegisterProcedure = protocolProcedure(
	userRegisterContract,
	async (value) => {
		console.log({ value });
		return {
			id: "test",
		};
	},
);

init();

registerProcedures([userRegisterProcedure]);

serve({
	fetch(req) {
		return callProcedure(req);
	},
	port: 3000,
});