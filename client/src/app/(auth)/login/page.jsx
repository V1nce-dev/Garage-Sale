import LoginForm from "@/components/form/LoginForm";
import PrivateRoute from "@/components/auth/PrivateRoute";

const Page = () => {
  return (
    <PrivateRoute>
      <LoginForm />
    </PrivateRoute>
  );
};

export default Page;
