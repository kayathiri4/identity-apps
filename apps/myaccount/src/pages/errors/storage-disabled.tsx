/**
 * Copyright (c) 2020, WSO2 LLC. (https://www.wso2.com).
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { EmptyPlaceholder } from "@wso2is/react-components";
import React, { FunctionComponent, ReactElement, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { RouteComponentProps } from "react-router-dom";
import { getEmptyPlaceholderIllustrations } from "../../configs";
import { AppConstants } from "../../constants";
import { history } from "../../helpers";

/**
 * Storage disabled error page.
 *
 * @param props - Props injected to the component.
 * @returns storage disabled error page
 */
const SessionStorageDisabled: FunctionComponent<RouteComponentProps> = (): ReactElement => {

    const { t } = useTranslation();

    useEffect(() => {
        try {
            const storage: Storage = sessionStorage;

            if (storage) {
                history.push(AppConstants.getAppHomePath());
            }
        } catch {
            // Storage is enabled
        }
    }, []);

    return (
        <EmptyPlaceholder
            image={ getEmptyPlaceholderIllustrations().loginError }
            imageSize="tiny"
            subtitle={ [
                t("myAccount:placeholders.sessionStorageDisabled.subtitles.0"),
                t("myAccount:placeholders.sessionStorageDisabled.subtitles.1")
            ] }
            title={ t("myAccount:placeholders.sessionStorageDisabled.title") }
        />
    );
};

/**
 * A default export was added to support React.lazy.
 * TODO: Change this to a named export once react starts supporting named exports for code splitting.
 * @see {@link https://reactjs.org/docs/code-splitting.html#reactlazy}
 */
export default SessionStorageDisabled;
