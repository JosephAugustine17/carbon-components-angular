/*!
 *
 * carbon-angular v0.0.0 | banner-content.interface.d.ts
 *
 * Copyright 2014, 2019 IBM
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * Deprecated in favour of `NotificationContent` (to be removed in v3.0).
 *
 * @deprecated
 */
export interface BannerContent {
    type: string;
    title: string;
    target?: string;
    duration?: number;
    smart?: boolean;
    closeLabel?: string;
}
export interface NotificationContent extends BannerContent {
    message: string;
}
export interface ToastContent extends NotificationContent {
    subtitle: string;
    caption: string;
}