import { z } from 'zod';

// Todo schema with proper type handling
export const todoSchema = z.object({
  id: z.number(),
  description: z.string(),
  completed: z.boolean(),
  created_at: z.coerce.date() // Automatically converts string timestamps to Date objects
});

export type Todo = z.infer<typeof todoSchema>;

// Input schema for creating todos
export const createTodoInputSchema = z.object({
  description: z.string().min(1, 'Description cannot be empty')
});

export type CreateTodoInput = z.infer<typeof createTodoInputSchema>;

// Input schema for updating todo completion status
export const updateTodoInputSchema = z.object({
  id: z.number(),
  completed: z.boolean()
});

export type UpdateTodoInput = z.infer<typeof updateTodoInputSchema>;

// Input schema for deleting todos
export const deleteTodoInputSchema = z.object({
  id: z.number()
});

export type DeleteTodoInput = z.infer<typeof deleteTodoInputSchema>;