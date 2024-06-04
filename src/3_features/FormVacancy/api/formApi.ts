import { rtkApi } from '5_shared/api/rtkApi';
import { Routes } from '5_shared/api/endpoints';

const formVacancyApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        sentVacancyForm: build.mutation({
            query: (params) => ({
                method: 'POST',
                url: Routes.FORM_VACANCIES,
                body: params,
            }),
        }),
    }),
    overrideExisting: false,
});

const useSentVacancyForm = formVacancyApi.useSentVacancyFormMutation;

export {
    formVacancyApi,
    useSentVacancyForm,
};
