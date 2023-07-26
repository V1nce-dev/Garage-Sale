import LoginForm from "@/components/form/LoginForm";
import PublicRoute from "@/components/auth/PublicRoute";

const Page = () => {
  return (
    <PublicRoute>
      <LoginForm />
    </PublicRoute>
  );
};

export default Page;
