import { ForwardedRef, forwardRef, InputHTMLAttributes } from "react";
import { StyleInput } from "./style";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string | undefined;
}

export const Input = forwardRef(
  (
    { label, error, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <StyleInput>
        <input ref={ref} {...rest} />
        {error ? <p>{error}</p> : null}
      </StyleInput>
    );
  }
);
