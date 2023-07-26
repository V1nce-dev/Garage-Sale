import BuildForm from "@/components/form/BuildForm";
import PrivateRoute from "@/components/auth/PrivateRoute";

const BuildPage = () => {
    return (
        <div>
            <PrivateRoute>
            <BuildForm/>
            </PrivateRoute>
        </div>
    )
}

export default BuildPage;