import { FieldValues } from "react-hook-form";
import MyPath from "./myContentWrappers/MyPath";
export default function FormSubmitted({
  errors,
}: {
  errors: SubmissionError<FieldValues> | null;
}) {
  return (
    <div className="form-submitted-container">
      <h3>Thank you for your submission but I&aposm sorry...</h3>
      <p>Unfortunately, your request failed to submit, please try again</p>
      <MyPath
        color="dark"
        buttonPath="/projects"
        customClassNames={"column-span"}
      >
        <button type="button">Try Again</button>
      </MyPath>
    </div>
  );
}
