import { useDealById, useUpdateDeal } from "@entities/deal";
import { useNavigate, useParams } from "react-router-dom";

import { DealFormData } from "../lib/validation";
import { DealForm } from "../ui/DealForm";

const EditDealPage = () => {
  const { id } = useParams<{ id: string }>();
  const dealId = Number(id);
  const navigate = useNavigate();

  const { data, isLoading, isError } = useDealById(dealId);
  const mutation = useUpdateDeal(dealId);

  const onSubmit = (formData: DealFormData) => {
    mutation.mutate(formData, {
      onSuccess: () => navigate("/deals"),
    });
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading deal</div>;

  const deal = data?.data.deals;

  return (
    <div>
      <h1>Edit Deal #{dealId}</h1>
      {mutation.isError && <p>Error updating deal</p>}
      <DealForm
        defaultValues={{
          customer: deal?.customer,
          address_city: deal?.address_city,
          address_state: deal?.address_state,
          address_street: deal?.address_street,
          address_zip_code: deal?.address_zip_code,
          room_area: deal?.room_area,
          number_of_people: deal?.number_of_people,
          appointment_date: deal?.appointment_date,
          special_instructions: deal?.special_instructions,
          room_access: deal?.room_access,
          price: deal?.price,
          progress: deal?.progress,
        }}
        onSubmit={onSubmit}
        isLoading={mutation.isPending}
      />
    </div>
  );
};

export default EditDealPage;
