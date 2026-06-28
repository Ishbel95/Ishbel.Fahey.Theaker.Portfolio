import { InputTypes } from "@/models/enums/InputTypes";
import { FormInputInterface } from "@/models/fragments/FormBlockInterface";
import CustomSelect from "@/components/CustomSelect";
export const getFormInput = (data: FormInputInterface) => {
  switch (data.inputType) {
    case InputTypes.Textarea:
      return (
        <textarea
          id={data.name}
          name={data.name}
          placeholder={data.placeholder}
          rows={data.rows}
          maxLength={data.maximumCharacters}
          minLength={data.minimumCharacters}
        />
      );
    case InputTypes.Select:
      return <CustomSelect selectData={data} />;
    default:
      return (
        <input
          id={data.name}
          name={data.name}
          type={data.inputType}
          placeholder={data.placeholder}
        />
      );
  }
};
