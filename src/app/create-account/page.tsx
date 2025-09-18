import CreateAccountForm from "@/components/CreateAccountForm";

const CreateAccountPage = () => {
  return (
    <div className="login-container justify-center text-center">
      <h1 className="text-xl font-bold mb-4">Create Account</h1>
      <CreateAccountForm />
    </div>
  );
};

export default CreateAccountPage;