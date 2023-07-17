import RegisterForm from "@/components/form/RegisterForm";
import PrivateRoute from "@/components/auth/PrivateRoute";

const Page = () => {
  return (
      <PrivateRoute>
      <RegisterForm />
      </PrivateRoute>
  );
};

export default Page;
