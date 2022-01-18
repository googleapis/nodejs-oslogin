// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import * as protos from '../protos/protos';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import { describe, it } from 'mocha';
import * as osloginserviceModule from '../src';

import {protobuf} from 'google-gax';

function generateSampleMessage<T extends object>(instance: T) {
    const filledObject = (instance.constructor as typeof protobuf.Message)
        .toObject(instance as protobuf.Message<T>, {defaults: true});
    return (instance.constructor as typeof protobuf.Message).fromObject(filledObject) as T;
}

function stubSimpleCall<ResponseType>(response?: ResponseType, error?: Error) {
    return error ? sinon.stub().rejects(error) : sinon.stub().resolves([response]);
}

function stubSimpleCallWithCallback<ResponseType>(response?: ResponseType, error?: Error) {
    return error ? sinon.stub().callsArgWith(2, error) : sinon.stub().callsArgWith(2, null, response);
}

describe('v1.OsLoginServiceClient', () => {
    it('has servicePath', () => {
        const servicePath = osloginserviceModule.v1.OsLoginServiceClient.servicePath;
        assert(servicePath);
    });

    it('has apiEndpoint', () => {
        const apiEndpoint = osloginserviceModule.v1.OsLoginServiceClient.apiEndpoint;
        assert(apiEndpoint);
    });

    it('has port', () => {
        const port = osloginserviceModule.v1.OsLoginServiceClient.port;
        assert(port);
        assert(typeof port === 'number');
    });

    it('should create a client with no option', () => {
        const client = new osloginserviceModule.v1.OsLoginServiceClient();
        assert(client);
    });

    it('should create a client with gRPC fallback', () => {
        const client = new osloginserviceModule.v1.OsLoginServiceClient({
            fallback: true,
        });
        assert(client);
    });

    it('has initialize method and supports deferred initialization', async () => {
        const client = new osloginserviceModule.v1.OsLoginServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        assert.strictEqual(client.osLoginServiceStub, undefined);
        await client.initialize();
        assert(client.osLoginServiceStub);
    });

    it('has close method', () => {
        const client = new osloginserviceModule.v1.OsLoginServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        client.close();
    });

    it('has getProjectId method', async () => {
        const fakeProjectId = 'fake-project-id';
        const client = new osloginserviceModule.v1.OsLoginServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        client.auth.getProjectId = sinon.stub().resolves(fakeProjectId);
        const result = await client.getProjectId();
        assert.strictEqual(result, fakeProjectId);
        assert((client.auth.getProjectId as SinonStub).calledWithExactly());
    });

    it('has getProjectId method with callback', async () => {
        const fakeProjectId = 'fake-project-id';
        const client = new osloginserviceModule.v1.OsLoginServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        client.auth.getProjectId = sinon.stub().callsArgWith(0, null, fakeProjectId);
        const promise = new Promise((resolve, reject) => {
            client.getProjectId((err?: Error|null, projectId?: string|null) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(projectId);
                }
            });
        });
        const result = await promise;
        assert.strictEqual(result, fakeProjectId);
    });

    describe('deletePosixAccount', () => {
        it('invokes deletePosixAccount without error', async () => {
            const client = new osloginserviceModule.v1.OsLoginServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.oslogin.v1.DeletePosixAccountRequest());
            request.name = '';
            const expectedHeaderRequestParams = "name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.google.protobuf.Empty());
            client.innerApiCalls.deletePosixAccount = stubSimpleCall(expectedResponse);
            const [response] = await client.deletePosixAccount(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.deletePosixAccount as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes deletePosixAccount without error using callback', async () => {
            const client = new osloginserviceModule.v1.OsLoginServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.oslogin.v1.DeletePosixAccountRequest());
            request.name = '';
            const expectedHeaderRequestParams = "name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.google.protobuf.Empty());
            client.innerApiCalls.deletePosixAccount = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.deletePosixAccount(
                    request,
                    (err?: Error|null, result?: protos.google.protobuf.IEmpty|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.deletePosixAccount as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes deletePosixAccount with error', async () => {
            const client = new osloginserviceModule.v1.OsLoginServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.oslogin.v1.DeletePosixAccountRequest());
            request.name = '';
            const expectedHeaderRequestParams = "name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedError = new Error('expected');
            client.innerApiCalls.deletePosixAccount = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.deletePosixAccount(request), expectedError);
            assert((client.innerApiCalls.deletePosixAccount as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });
    });

    describe('deleteSshPublicKey', () => {
        it('invokes deleteSshPublicKey without error', async () => {
            const client = new osloginserviceModule.v1.OsLoginServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.oslogin.v1.DeleteSshPublicKeyRequest());
            request.name = '';
            const expectedHeaderRequestParams = "name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.google.protobuf.Empty());
            client.innerApiCalls.deleteSshPublicKey = stubSimpleCall(expectedResponse);
            const [response] = await client.deleteSshPublicKey(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.deleteSshPublicKey as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes deleteSshPublicKey without error using callback', async () => {
            const client = new osloginserviceModule.v1.OsLoginServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.oslogin.v1.DeleteSshPublicKeyRequest());
            request.name = '';
            const expectedHeaderRequestParams = "name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.google.protobuf.Empty());
            client.innerApiCalls.deleteSshPublicKey = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.deleteSshPublicKey(
                    request,
                    (err?: Error|null, result?: protos.google.protobuf.IEmpty|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.deleteSshPublicKey as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes deleteSshPublicKey with error', async () => {
            const client = new osloginserviceModule.v1.OsLoginServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.oslogin.v1.DeleteSshPublicKeyRequest());
            request.name = '';
            const expectedHeaderRequestParams = "name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedError = new Error('expected');
            client.innerApiCalls.deleteSshPublicKey = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.deleteSshPublicKey(request), expectedError);
            assert((client.innerApiCalls.deleteSshPublicKey as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });
    });

    describe('getLoginProfile', () => {
        it('invokes getLoginProfile without error', async () => {
            const client = new osloginserviceModule.v1.OsLoginServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.oslogin.v1.GetLoginProfileRequest());
            request.name = '';
            const expectedHeaderRequestParams = "name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.google.cloud.oslogin.v1.LoginProfile());
            client.innerApiCalls.getLoginProfile = stubSimpleCall(expectedResponse);
            const [response] = await client.getLoginProfile(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.getLoginProfile as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes getLoginProfile without error using callback', async () => {
            const client = new osloginserviceModule.v1.OsLoginServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.oslogin.v1.GetLoginProfileRequest());
            request.name = '';
            const expectedHeaderRequestParams = "name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.google.cloud.oslogin.v1.LoginProfile());
            client.innerApiCalls.getLoginProfile = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.getLoginProfile(
                    request,
                    (err?: Error|null, result?: protos.google.cloud.oslogin.v1.ILoginProfile|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.getLoginProfile as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes getLoginProfile with error', async () => {
            const client = new osloginserviceModule.v1.OsLoginServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.oslogin.v1.GetLoginProfileRequest());
            request.name = '';
            const expectedHeaderRequestParams = "name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedError = new Error('expected');
            client.innerApiCalls.getLoginProfile = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.getLoginProfile(request), expectedError);
            assert((client.innerApiCalls.getLoginProfile as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });
    });

    describe('getSshPublicKey', () => {
        it('invokes getSshPublicKey without error', async () => {
            const client = new osloginserviceModule.v1.OsLoginServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.oslogin.v1.GetSshPublicKeyRequest());
            request.name = '';
            const expectedHeaderRequestParams = "name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.google.cloud.oslogin.common.SshPublicKey());
            client.innerApiCalls.getSshPublicKey = stubSimpleCall(expectedResponse);
            const [response] = await client.getSshPublicKey(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.getSshPublicKey as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes getSshPublicKey without error using callback', async () => {
            const client = new osloginserviceModule.v1.OsLoginServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.oslogin.v1.GetSshPublicKeyRequest());
            request.name = '';
            const expectedHeaderRequestParams = "name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.google.cloud.oslogin.common.SshPublicKey());
            client.innerApiCalls.getSshPublicKey = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.getSshPublicKey(
                    request,
                    (err?: Error|null, result?: protos.google.cloud.oslogin.common.ISshPublicKey|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.getSshPublicKey as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes getSshPublicKey with error', async () => {
            const client = new osloginserviceModule.v1.OsLoginServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.oslogin.v1.GetSshPublicKeyRequest());
            request.name = '';
            const expectedHeaderRequestParams = "name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedError = new Error('expected');
            client.innerApiCalls.getSshPublicKey = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.getSshPublicKey(request), expectedError);
            assert((client.innerApiCalls.getSshPublicKey as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });
    });

    describe('importSshPublicKey', () => {
        it('invokes importSshPublicKey without error', async () => {
            const client = new osloginserviceModule.v1.OsLoginServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.oslogin.v1.ImportSshPublicKeyRequest());
            request.parent = '';
            const expectedHeaderRequestParams = "parent=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.google.cloud.oslogin.v1.ImportSshPublicKeyResponse());
            client.innerApiCalls.importSshPublicKey = stubSimpleCall(expectedResponse);
            const [response] = await client.importSshPublicKey(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.importSshPublicKey as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes importSshPublicKey without error using callback', async () => {
            const client = new osloginserviceModule.v1.OsLoginServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.oslogin.v1.ImportSshPublicKeyRequest());
            request.parent = '';
            const expectedHeaderRequestParams = "parent=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.google.cloud.oslogin.v1.ImportSshPublicKeyResponse());
            client.innerApiCalls.importSshPublicKey = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.importSshPublicKey(
                    request,
                    (err?: Error|null, result?: protos.google.cloud.oslogin.v1.IImportSshPublicKeyResponse|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.importSshPublicKey as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes importSshPublicKey with error', async () => {
            const client = new osloginserviceModule.v1.OsLoginServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.oslogin.v1.ImportSshPublicKeyRequest());
            request.parent = '';
            const expectedHeaderRequestParams = "parent=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedError = new Error('expected');
            client.innerApiCalls.importSshPublicKey = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.importSshPublicKey(request), expectedError);
            assert((client.innerApiCalls.importSshPublicKey as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });
    });

    describe('updateSshPublicKey', () => {
        it('invokes updateSshPublicKey without error', async () => {
            const client = new osloginserviceModule.v1.OsLoginServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.oslogin.v1.UpdateSshPublicKeyRequest());
            request.name = '';
            const expectedHeaderRequestParams = "name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.google.cloud.oslogin.common.SshPublicKey());
            client.innerApiCalls.updateSshPublicKey = stubSimpleCall(expectedResponse);
            const [response] = await client.updateSshPublicKey(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.updateSshPublicKey as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes updateSshPublicKey without error using callback', async () => {
            const client = new osloginserviceModule.v1.OsLoginServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.oslogin.v1.UpdateSshPublicKeyRequest());
            request.name = '';
            const expectedHeaderRequestParams = "name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.google.cloud.oslogin.common.SshPublicKey());
            client.innerApiCalls.updateSshPublicKey = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.updateSshPublicKey(
                    request,
                    (err?: Error|null, result?: protos.google.cloud.oslogin.common.ISshPublicKey|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.updateSshPublicKey as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes updateSshPublicKey with error', async () => {
            const client = new osloginserviceModule.v1.OsLoginServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.oslogin.v1.UpdateSshPublicKeyRequest());
            request.name = '';
            const expectedHeaderRequestParams = "name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedError = new Error('expected');
            client.innerApiCalls.updateSshPublicKey = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.updateSshPublicKey(request), expectedError);
            assert((client.innerApiCalls.updateSshPublicKey as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });
    });

    describe('Path templates', () => {

        describe('posixAccount', () => {
            const fakePath = "/rendered/path/posixAccount";
            const expectedParameters = {
                user: "userValue",
                project: "projectValue",
            };
            const client = new osloginserviceModule.v1.OsLoginServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            client.pathTemplates.posixAccountPathTemplate.render =
                sinon.stub().returns(fakePath);
            client.pathTemplates.posixAccountPathTemplate.match =
                sinon.stub().returns(expectedParameters);

            it('posixAccountPath', () => {
                const result = client.posixAccountPath("userValue", "projectValue");
                assert.strictEqual(result, fakePath);
                assert((client.pathTemplates.posixAccountPathTemplate.render as SinonStub)
                    .getCall(-1).calledWith(expectedParameters));
            });

            it('matchUserFromPosixAccountName', () => {
                const result = client.matchUserFromPosixAccountName(fakePath);
                assert.strictEqual(result, "userValue");
                assert((client.pathTemplates.posixAccountPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchProjectFromPosixAccountName', () => {
                const result = client.matchProjectFromPosixAccountName(fakePath);
                assert.strictEqual(result, "projectValue");
                assert((client.pathTemplates.posixAccountPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });
        });

        describe('sshPublicKey', () => {
            const fakePath = "/rendered/path/sshPublicKey";
            const expectedParameters = {
                user: "userValue",
                fingerprint: "fingerprintValue",
            };
            const client = new osloginserviceModule.v1.OsLoginServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            client.pathTemplates.sshPublicKeyPathTemplate.render =
                sinon.stub().returns(fakePath);
            client.pathTemplates.sshPublicKeyPathTemplate.match =
                sinon.stub().returns(expectedParameters);

            it('sshPublicKeyPath', () => {
                const result = client.sshPublicKeyPath("userValue", "fingerprintValue");
                assert.strictEqual(result, fakePath);
                assert((client.pathTemplates.sshPublicKeyPathTemplate.render as SinonStub)
                    .getCall(-1).calledWith(expectedParameters));
            });

            it('matchUserFromSshPublicKeyName', () => {
                const result = client.matchUserFromSshPublicKeyName(fakePath);
                assert.strictEqual(result, "userValue");
                assert((client.pathTemplates.sshPublicKeyPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchFingerprintFromSshPublicKeyName', () => {
                const result = client.matchFingerprintFromSshPublicKeyName(fakePath);
                assert.strictEqual(result, "fingerprintValue");
                assert((client.pathTemplates.sshPublicKeyPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });
        });

        describe('user', () => {
            const fakePath = "/rendered/path/user";
            const expectedParameters = {
                user: "userValue",
            };
            const client = new osloginserviceModule.v1.OsLoginServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            client.pathTemplates.userPathTemplate.render =
                sinon.stub().returns(fakePath);
            client.pathTemplates.userPathTemplate.match =
                sinon.stub().returns(expectedParameters);

            it('userPath', () => {
                const result = client.userPath("userValue");
                assert.strictEqual(result, fakePath);
                assert((client.pathTemplates.userPathTemplate.render as SinonStub)
                    .getCall(-1).calledWith(expectedParameters));
            });

            it('matchUserFromUserName', () => {
                const result = client.matchUserFromUserName(fakePath);
                assert.strictEqual(result, "userValue");
                assert((client.pathTemplates.userPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });
        });
    });
});
