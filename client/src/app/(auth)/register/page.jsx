import RegisterForm from "@/components/form/RegisterForm";
import PublicRoute from "@/components/auth/PublicRoute";

const Page = () => {
  return (
      <PublicRoute>
      <RegisterForm />
      </PublicRoute>
  );
};

export default Page;
