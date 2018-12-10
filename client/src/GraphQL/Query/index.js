import { gql } from 'graphql-tag';

export const GET_TODOS = gql`
    query GET_TODOS {
        todos {
            id,
            text,
            completed
        }
    }
`;

export const GET_TODO = gql`
    query GET_TODO {
        todo($id: ID!) {  
            $id,
            text,
            completed
        }
    }
`;