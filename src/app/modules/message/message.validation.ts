import { z } from "zod";

export const MessageValidationSchema = z.object({
    body: z.object({
        name: z.string({
            required_error: "Name of sender is required",
            invalid_type_error: "Name must be in string"
        }),
        email: z.string({
            required_error: "Email of sender is required",
            invalid_type_error: "Email must be in string"
        }),
        message: z.string({
            required_error: "Message is required",
            invalid_type_error: "Message must be in string"
        }),

    })
})

