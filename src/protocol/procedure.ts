import { procedure } from "../procedure.js";
import type { Contract, Procedure, Protocol } from "../types.js";

export const protocolProcedure = procedure as <
	$Type extends Procedure.Type,
	$Input,
	$Output,
>(
	contract: Contract<$Type, Protocol.Binary, $Input, $Output>,
	handler: Procedure.InnerHandler<$Input, $Output>,
) => Procedure.New<$Type, Protocol.Binary, $Input, $Output>;
