import { z } from 'zod';

// Enums from Prisma schema
export const StatusEnum = z.enum(['ACTIVE', 'INACTIVE']);

export const TestimonialStatusEnum = z.enum(['PENDING', 'APPROVED', 'REJECTED']);

export const NewsStatusEnum = z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED']);

export const UsefulInfoStatusEnum = z.enum(['DRAFT', 'PUBLISHED']);

export const FeedbackStatusEnum = z.enum(['UNREAD', 'READ', 'ARCHIVED']);

export const CategorieProduitSchema = z.string();