import { useProgressOptions } from "@entities/deal";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@shared/ui/Input";
import { Label } from "@shared/ui/Label";
import { useForm } from "react-hook-form";

import { DealFormData, dealSchema } from "../lib/validation";

type Props = {
  defaultValues?: Partial<DealFormData>;
  onSubmit: (data: DealFormData) => void;
  isLoading?: boolean;
};

export const DealForm = ({ defaultValues, onSubmit, isLoading }: Props) => {
  const { data: progressOptionsRes } = useProgressOptions();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DealFormData>({
    resolver: zodResolver(dealSchema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Customer ID"
        id="customer"
        type="number"
        register={register("customer")}
        error={errors.customer?.message}
      />
      <Input
        label="City"
        id="address_city"
        register={register("address_city")}
        error={errors.address_city?.message}
      />
      <Input
        label="State"
        id="address_state"
        register={register("address_state")}
        error={errors.address_state?.message}
      />
      <Input
        label="Street"
        id="address_street"
        register={register("address_street")}
      />
      <Input
        label="ZIP Code"
        id="address_zip_code"
        register={register("address_zip_code")}
        error={errors.address_zip_code?.message}
      />
      <Input
        label="Room Area (m²)"
        id="room_area"
        type="number"
        register={register("room_area")}
        error={errors.room_area?.message}
      />
      <Input
        label="Number of People"
        id="number_of_people"
        type="number"
        register={register("number_of_people")}
        error={errors.number_of_people?.message}
      />
      <Input
        label="Appointment Date"
        id="appointment_date"
        type="datetime-local"
        register={register("appointment_date")}
        error={errors.appointment_date?.message}
      />
      <Input
        label="Price"
        id="price"
        type="number"
        step="0.01"
        register={register("price")}
        error={errors.price?.message}
      />

      <div>
        <Label htmlFor="room_access">Room Access</Label>
        <select id="room_access" {...register("room_access")}>
          <option value="keys_with_doorman">Keys with doorman</option>
          <option value="fingerprint">Fingerprint</option>
        </select>
        {errors.room_access && <span>{errors.room_access.message}</span>}
      </div>

      <div>
        <Label htmlFor="progress">Progress</Label>
        <select id="progress" {...register("progress")}>
          {progressOptionsRes?.data.progressOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.progress && <span>{errors.progress.message}</span>}
      </div>

      <div>
        <Label htmlFor="special_instructions">Special Instructions</Label>
        <textarea
          id="special_instructions"
          {...register("special_instructions")}
        />
      </div>

      <button type="submit" disabled={isLoading}>
        {isLoading ? "Saving..." : "Save"}
      </button>
    </form>
  );
};
