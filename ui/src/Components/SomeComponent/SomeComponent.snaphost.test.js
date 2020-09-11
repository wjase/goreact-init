import React from 'react';
import { mount } from 'enzyme';
import { articleApi } from '../../api/ArticleApi.js'

import SomeComponent from './SomeComponent';
import { act } from '@testing-library/react';
import {waitForComponentToPaint} from '../../TestUtils.js'

const initialData = {
    articles: [],
    error: null,
};


describe('SomeComponent', () => {
    it('should render correctly ', async () => {

        let testArticles = new Promise(function (resolve, reject) {
            resolve([
                { "objectID": 1, "title": "title1" },
                { "objectID": 2, "title": "title2" },
                { "objectID": 3, "title": "title3" }
            ])
        })
        const getArticlesSpy = jest.spyOn(articleApi, 'getArticles');
        getArticlesSpy.mockReturnValue(testArticles);

        const component = mount(<SomeComponent initialData={initialData} />);
        await waitForComponentToPaint(component);
        expect(component).toMatchSnapshot();

        //teardown
        getArticlesSpy.mockClear();

    });
});
