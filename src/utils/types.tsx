export interface BaseFormProps {
  heading: string;
  type: string;
  placeholder_email: string;
  placeholder_password: string;
  button_title: string;
}

export interface LoginProps extends BaseFormProps {}

export interface RegisterProps extends BaseFormProps {
  placeholder_username: string;
}
