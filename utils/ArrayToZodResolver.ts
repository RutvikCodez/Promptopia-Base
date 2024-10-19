import { z } from "zod";
import { magicField } from "./types";
import { zodResolver } from "@hookform/resolvers/zod";

export const ArrayToZodResolver = (
    fields: magicField[],
) => {
    const fieldObject = fields.reduce((obj, field)=>{
        return {
            ...obj,
            [field.config.name]: field.config.validation
        }
    }, {});
    const zodSchema = z.object(fieldObject);
    return zodResolver(zodSchema)
}