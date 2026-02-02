import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

export default interface FormBlockFragmentQuery {
  __typename: "FormBlockRecord";
  id: string;
  successPath: string;
  formName: string;
  formMode: "light" | "dark";
  formContent: FormInputInterface[];
}

export interface FormInputInterface {
  id: string;
  label: string;
  name: string;
  inputType: string;
  column: number | string;
  placeholder: string;
  required: boolean;
  matchesWith: string;
  maximumCharacters: number;
  minimumCharacters: number;
  rows: number;
  selectTitle: string;
  selectIcon: any;
  selectOptions: {
    string: string;
    id: string;
  }[];
}
