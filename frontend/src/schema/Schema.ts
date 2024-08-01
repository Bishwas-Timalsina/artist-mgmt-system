import { z } from "zod";

export const UserSchema = z.object({
  firstName: z
    .string({ required_error: "First name is required" })
    .refine((data: string) => data?.trim() !== "", {
      message: "First name is required",
    })
    .refine((data: string) => data?.length >= 3, {
      message: "First name cannot be less than 3 character",
    }),
  lastName: z
    .string({ required_error: "Last name is required" })
    .refine((data: string) => data?.trim() !== "", {
      message: "Last name is required",
    })
    .refine((data: string) => data?.length >= 3, {
      message: "Last name cannot be less than 3 character",
    }),
  email: z
    .string({ required_error: "Email is a required field" })
    .email("Please enter valid email")
    .refine((data: string) => data?.trim() !== "", {
      message: "Email is a required fiel",
    }),
  password: z
    .string({ required_error: "Password is required" })
    .refine((data: string) => data?.trim() !== "", {
      message: "Password is required",
    })
    .refine((data: string) => data.length >= 8 && data?.length <= 12, {
      message: "Password should be 8-12 characters long",
    }),
  phone: z
    .string({ required_error: "Phone number is required" })
    .refine((data: string) => data?.trim() !== "", {
      message: "Phone number is required field",
    })
    .refine((data) => /^9\d{9}$/.test(data), {
      message: "Phone number must be 10 digits and start with 9",
    }),
  dob: z
    .string({ required_error: "Date of birth is required" })
    .refine((data) => data.trim() !== "", {
      message: "Date of birth is a required field",
    })
    .refine((data) => /^\d{4}-\d{2}-\d{2}$/.test(data), {
      message: "Date of birth must be in YYYY-MM-DD format",
    }),
  gender: z
    .enum(["m", "f", "o"], {
      message: "Please select the valid option",
    })
    .refine((data) => data !== null && data !== undefined, {
      message: "Gender is required",
    }),

  address: z
    .string({ required_error: "Address is required" })
    .refine((data: string) => data?.trim() !== "", {
      message: "Address is required",
    })
    .refine((data: string) => data?.length >= 3, {
      message: "Address cannot be less than 3 character",
    }),
});
export const LoginSchema = z.object({
  email: z
    .string({ required_error: "Email is a required field" })
    .email("Please enter valid email")
    .refine((data: string) => data?.trim() !== "", {
      message: "Email is a required fiel",
    }),
  password: z
    .string({ required_error: "Password is required" })
    .refine((data: string) => data?.trim() !== "", {
      message: "Password is required",
    })
    .refine((data: string) => data.length >= 8 && data?.length <= 12, {
      message: "Password should be 8-12 characters long",
    }),
});
export const ArtistSchema = z.object({
  name: z
    .string({ required_error: "Artist name is required" })
    .refine((data: string) => data?.trim() !== "", {
      message: "Artist name is required",
    })
    .refine((data: string) => data?.length >= 3, {
      message: "Artist name cannot be less than 3 character",
    }),
  dob: z
    .string({ required_error: "Date of birth is required" })
    .refine((data) => data.trim() !== "", {
      message: "Date of birth is a required field",
    })
    .refine((data) => /^\d{4}-\d{2}-\d{2}$/.test(data), {
      message: "Date of birth must be in YYYY-MM-DD format",
    }),
  gender: z
    .enum(["m", "f", "o"], {
      message: "Please select the valid option",
    })
    .refine((data) => data !== null && data !== undefined, {
      message: "Gender is required",
    }),
  address: z
    .string({ required_error: "Address is required" })
    .refine((data: string) => data?.trim() !== "", {
      message: "Address is required",
    })
    .refine((data: string) => data?.length >= 3, {
      message: "Address cannot be less than 3 character",
    }),
  no_of_album_released: z
    .string({ required_error: "First release year is required" })
    .refine((data) => /^\d+$/.test(data), {
      message: "Number of albums released must contain only numeric values",
    }),
  first_release_year: z
    .string({ required_error: "First release year is required" })
    .refine((data) => data.trim() !== "", {
      message: "First release year is a required field",
    }),
});
export const musicSchema = z.object({});
