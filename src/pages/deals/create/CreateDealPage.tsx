import { useCreateDeal } from "@entities/deal";
import { useNavigate } from "react-router-dom";

import { DealFormData } from "../lib/validation";
import { DealForm } from "../ui/DealForm";

const CreateDealPage = () => {
  const navigate = useNavigate();
  const mutation = useCreateDeal();

  const onSubmit = (data: DealFormData) => {
    mutation.mutate(data, {
      onSuccess: () => navigate("/deals"),
    });
  };

  return (
    <div>
      <h1>New Deal</h1>
      {mutation.isError && <p>Error creating deal</p>}
      <DealForm onSubmit={onSubmit} isLoading={mutation.isPending} />
    </div>
  );
};

export default CreateDealPage;
