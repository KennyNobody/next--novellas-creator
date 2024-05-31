import { rtkApi } from '5_shared/api/rtkApi';
import { Routes } from '5_shared/api/endpoints';

const formApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        sentSubscribeForm: build.mutation({
            query: (params) => ({
                method: 'POST',
                url: Routes.FORM_SUBSCRIPTION,
                body: params,
            }),
        }),
    }),
    overrideExisting: false,
});

const useSentSubscribeForm = formApi.useSentSubscribeFormMutation;

export {
    formApi,
    useSentSubscribeForm,
};
