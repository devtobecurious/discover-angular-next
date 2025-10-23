import { customError, minLength, required, schema, validate } from "@angular/forms/signals"

export interface CreateAccount {
  firstName: string,
  nickName: string,
  password: string,
  confirmPassword: string
}

export const createAccountSchema = schema<CreateAccount>(context => {
  required(context.firstName, { message: 'Le prénom est obligatoire.'});
  required(context.nickName , { message: 'Le pseudo est obligatoire.', when: ctx => ctx.valueOf(context.firstName) === 'garfield' });
  required(context.password );
  minLength(context.password, 8);
  required(context.confirmPassword);
  minLength(context.confirmPassword, 8);
  validate(context.confirmPassword, confPaswwordContext => {
    const confPasswordValue = confPaswwordContext.value();
    const paswordValue = confPaswwordContext.valueOf(context.password);

    if(confPasswordValue !== paswordValue) {
      return customError({ kind: 'password-mismatch', message: 'Les mots de passe ne correspondent pas.' });
    }

    return null;
  });
});
