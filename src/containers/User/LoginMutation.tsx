import React from 'react';
import { Mutation } from 'react-apollo';
import get from 'lodash.get';

import {
  loginMutation,
  loginMutationVariables,
  loginMutation_login,
} from '../../graphql/generated';
import { LOGIN_MUTATION } from '../../graphql/User/queries';

class LM extends Mutation<loginMutation, loginMutationVariables> {}

interface LoginContainerResponse {
  loading: boolean;
  token?: string;
  login: (emailAddress: string, password: string) => void;
}

interface LoginContainerProps {
  children: (res: LoginContainerResponse) => React.ReactNode;
  onCompleted?: (login: loginMutation_login | null) => void;
  onError?: (message: string) => void;
}

export class LoginMutation extends React.Component<LoginContainerProps> {
  render() {
    const { children, onCompleted, onError } = this.props;
    return (
      <LM
        onError={(err) => onError && onError(err.message)}
        onCompleted={(data) => onCompleted && onCompleted(get(data, 'login', null))}
        mutation={LOGIN_MUTATION}
      >
        {(loginAction, { loading, data, client }) => {
          const token = get(data, 'login.token', '');
          if (token) {
            client.resetStore();
          }
          return children({
            loading,
            token,
            login: (emailAddress: string, password: string) =>
              loginAction({ variables: { emailAddress, password } }),
          });
        }}
      </LM>
    );
  }
}
