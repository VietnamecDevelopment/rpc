import type { Type } from "@the-minimal/protocol";
import type { Procedure } from "../types";

export type ProtocolContract<
	$Type extends Procedure.Type,
	$Input extends Type.Any,
	$Output extends Type.Any,
> = {
	type: $Type;
	path: string;
	headers?: Procedure.Headers;
	input: $Input;
	output: $Output;
};

export type Result<$Value> = {
	code: number;
	data: $Value;
	error: null;
} | {
	code: number;
	data: null;
	error: string;
};
