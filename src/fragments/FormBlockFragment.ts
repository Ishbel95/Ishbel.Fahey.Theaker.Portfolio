export const FormBlockFragment = `
fragment FormBlockFragment on FormBlockRecord {
    __typename
    id
    successPath
    formName
    formMode
    formContent {
    id
    label
    name
    inputType
    column
    placeholder
    required
    matchesWith
    maximumCharacters
    minimumCharacters
    rows
    selectOptions {
        string
        id
    }
  }
}
`;
