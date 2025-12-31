import { z } from 'zod';
export declare const StatusEnum: z.ZodEnum<{
    ACTIVE: "ACTIVE";
    INACTIVE: "INACTIVE";
}>;
export declare const TestimonialStatusEnum: z.ZodEnum<{
    PENDING: "PENDING";
    APPROVED: "APPROVED";
    REJECTED: "REJECTED";
}>;
export declare const NewsStatusEnum: z.ZodEnum<{
    ARCHIVED: "ARCHIVED";
    DRAFT: "DRAFT";
    PUBLISHED: "PUBLISHED";
}>;
export declare const UsefulInfoStatusEnum: z.ZodEnum<{
    DRAFT: "DRAFT";
    PUBLISHED: "PUBLISHED";
}>;
export declare const FeedbackStatusEnum: z.ZodEnum<{
    UNREAD: "UNREAD";
    READ: "READ";
    ARCHIVED: "ARCHIVED";
}>;
export declare const CategorieProduitSchema: z.ZodString;
//# sourceMappingURL=enums.d.ts.map