import { rtkApi } from '5_shared/api/rtkApi';
import { Routes } from '5_shared/api/endpoints';

const formVacancyApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        sentVacancyForm: build.mutation({
            query: (params) => {
                const bodyFormData = new FormData();
                bodyFormData.append('email', params.email);
                bodyFormData.append('fio', params.fio);
                bodyFormData.append('telefon', params.telefon);
                bodyFormData.append('rezyume', params.rezyume);
                bodyFormData.append('soprovoditelnoe_pismo', params.soprovoditelnoe_pismo);

                return {
                    method: 'POST',
                    url: Routes.FORM_VACANCIES,
                    body: bodyFormData,
                    headers: {
                        'Content-Type': 'multipart/form-data;',
                    },
                    formData: true,
                };
            },
        }),
    }),
    overrideExisting: false,
});

const useSentVacancyForm = formVacancyApi.useSentVacancyFormMutation;

export {
    formVacancyApi,
    useSentVacancyForm,
};
