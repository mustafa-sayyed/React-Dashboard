import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router";
import { toast } from "sonner";
import z from "zod";
import axios from "axios";
import { useNavigate } from "react-router";
import { login } from "@/utils/api";
import { Spinner } from "./ui/spinner";
import { useAuthStore, useTokenStore } from "@/store";

const loginSchema = z.object({
  email: z.string().nonempty("Email is required").email("Invalid Email"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .nonempty("Password is required"),
});

function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const setToken = useTokenStore((state) => state.setToken);
  const loginUser = useAuthStore((state) => state.loginUser);
  const mutation = useMutation({
    mutationFn: login,
    onError(error) {
      toast.error(`${error.response?.data?.message || error.message}`, {
        style: {
          color: "red",
        },
      });
      console.log("Error: ", error);
    },
    onSuccess(response) {
      toast.success("Logged in successfully!", {
        style: {
          color: "green",
        },
      });

      const token = response.data.accessToken;
      setToken(token);

      const { name, email, _id } = response.data.user;
      loginUser(name, email, _id);

      navigate("/dashboard/home");
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = loginSchema.safeDecode({ email, password });
    if (!result.success) {
      const errors = z.flattenError(result.error);

      Object.entries(errors.fieldErrors).forEach(([field, message]) => {
        if (field && message.length > 0) {
          const errorMessage = `${field}: ${message[0]}`;
          toast.error(errorMessage, {
            style: {
              color: "red",
            },
          });
        }
      });

      return;
    }

    mutation.mutate({ email, password });
  };

  return (
    <div className={"flex flex-col gap-6"}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Login to your Account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="text"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <Link
                    to="/forgot-password"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                    Forgot your password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Field>
              <Field>
                <Button type="submit" disabled={mutation.isPending}>
                  {mutation.isPending ? (
                    <>
                      <Spinner />
                      <span>Logging in...</span>
                    </>
                  ) : (
                    "Login"
                  )}
                </Button>

                <FieldDescription className="text-center">
                  Don&apos;t have an account? <Link to={"/auth/signup"}>Sign up</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default LoginForm;
