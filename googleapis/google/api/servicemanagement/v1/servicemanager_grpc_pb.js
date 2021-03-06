// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2017 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
'use strict';
var grpc = require('grpc');
var google_api_servicemanagement_v1_servicemanager_pb = require('../../../../google/api/servicemanagement/v1/servicemanager_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_auth_pb = require('../../../../google/api/auth_pb.js');
var google_api_service_pb = require('../../../../google/api/service_pb.js');
var google_api_servicemanagement_v1_resources_pb = require('../../../../google/api/servicemanagement/v1/resources_pb.js');
var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js');
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var google_rpc_status_pb = require('../../../../google/rpc/status_pb.js');

function serialize_google_api_Service(arg) {
  if (!(arg instanceof google_api_service_pb.Service)) {
    throw new Error('Expected argument of type google.api.Service');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_api_Service(buffer_arg) {
  return google_api_service_pb.Service.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_servicemanagement_v1_CreateServiceConfigRequest(arg) {
  if (!(arg instanceof google_api_servicemanagement_v1_servicemanager_pb.CreateServiceConfigRequest)) {
    throw new Error('Expected argument of type google.api.servicemanagement.v1.CreateServiceConfigRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_api_servicemanagement_v1_CreateServiceConfigRequest(buffer_arg) {
  return google_api_servicemanagement_v1_servicemanager_pb.CreateServiceConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_servicemanagement_v1_CreateServiceRequest(arg) {
  if (!(arg instanceof google_api_servicemanagement_v1_servicemanager_pb.CreateServiceRequest)) {
    throw new Error('Expected argument of type google.api.servicemanagement.v1.CreateServiceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_api_servicemanagement_v1_CreateServiceRequest(buffer_arg) {
  return google_api_servicemanagement_v1_servicemanager_pb.CreateServiceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_servicemanagement_v1_CreateServiceRolloutRequest(arg) {
  if (!(arg instanceof google_api_servicemanagement_v1_servicemanager_pb.CreateServiceRolloutRequest)) {
    throw new Error('Expected argument of type google.api.servicemanagement.v1.CreateServiceRolloutRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_api_servicemanagement_v1_CreateServiceRolloutRequest(buffer_arg) {
  return google_api_servicemanagement_v1_servicemanager_pb.CreateServiceRolloutRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_servicemanagement_v1_DeleteServiceRequest(arg) {
  if (!(arg instanceof google_api_servicemanagement_v1_servicemanager_pb.DeleteServiceRequest)) {
    throw new Error('Expected argument of type google.api.servicemanagement.v1.DeleteServiceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_api_servicemanagement_v1_DeleteServiceRequest(buffer_arg) {
  return google_api_servicemanagement_v1_servicemanager_pb.DeleteServiceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_servicemanagement_v1_DisableServiceRequest(arg) {
  if (!(arg instanceof google_api_servicemanagement_v1_servicemanager_pb.DisableServiceRequest)) {
    throw new Error('Expected argument of type google.api.servicemanagement.v1.DisableServiceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_api_servicemanagement_v1_DisableServiceRequest(buffer_arg) {
  return google_api_servicemanagement_v1_servicemanager_pb.DisableServiceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_servicemanagement_v1_EnableServiceRequest(arg) {
  if (!(arg instanceof google_api_servicemanagement_v1_servicemanager_pb.EnableServiceRequest)) {
    throw new Error('Expected argument of type google.api.servicemanagement.v1.EnableServiceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_api_servicemanagement_v1_EnableServiceRequest(buffer_arg) {
  return google_api_servicemanagement_v1_servicemanager_pb.EnableServiceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_servicemanagement_v1_GenerateConfigReportRequest(arg) {
  if (!(arg instanceof google_api_servicemanagement_v1_servicemanager_pb.GenerateConfigReportRequest)) {
    throw new Error('Expected argument of type google.api.servicemanagement.v1.GenerateConfigReportRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_api_servicemanagement_v1_GenerateConfigReportRequest(buffer_arg) {
  return google_api_servicemanagement_v1_servicemanager_pb.GenerateConfigReportRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_servicemanagement_v1_GenerateConfigReportResponse(arg) {
  if (!(arg instanceof google_api_servicemanagement_v1_servicemanager_pb.GenerateConfigReportResponse)) {
    throw new Error('Expected argument of type google.api.servicemanagement.v1.GenerateConfigReportResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_api_servicemanagement_v1_GenerateConfigReportResponse(buffer_arg) {
  return google_api_servicemanagement_v1_servicemanager_pb.GenerateConfigReportResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_servicemanagement_v1_GetServiceConfigRequest(arg) {
  if (!(arg instanceof google_api_servicemanagement_v1_servicemanager_pb.GetServiceConfigRequest)) {
    throw new Error('Expected argument of type google.api.servicemanagement.v1.GetServiceConfigRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_api_servicemanagement_v1_GetServiceConfigRequest(buffer_arg) {
  return google_api_servicemanagement_v1_servicemanager_pb.GetServiceConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_servicemanagement_v1_GetServiceRequest(arg) {
  if (!(arg instanceof google_api_servicemanagement_v1_servicemanager_pb.GetServiceRequest)) {
    throw new Error('Expected argument of type google.api.servicemanagement.v1.GetServiceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_api_servicemanagement_v1_GetServiceRequest(buffer_arg) {
  return google_api_servicemanagement_v1_servicemanager_pb.GetServiceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_servicemanagement_v1_GetServiceRolloutRequest(arg) {
  if (!(arg instanceof google_api_servicemanagement_v1_servicemanager_pb.GetServiceRolloutRequest)) {
    throw new Error('Expected argument of type google.api.servicemanagement.v1.GetServiceRolloutRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_api_servicemanagement_v1_GetServiceRolloutRequest(buffer_arg) {
  return google_api_servicemanagement_v1_servicemanager_pb.GetServiceRolloutRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_servicemanagement_v1_ListServiceConfigsRequest(arg) {
  if (!(arg instanceof google_api_servicemanagement_v1_servicemanager_pb.ListServiceConfigsRequest)) {
    throw new Error('Expected argument of type google.api.servicemanagement.v1.ListServiceConfigsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_api_servicemanagement_v1_ListServiceConfigsRequest(buffer_arg) {
  return google_api_servicemanagement_v1_servicemanager_pb.ListServiceConfigsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_servicemanagement_v1_ListServiceConfigsResponse(arg) {
  if (!(arg instanceof google_api_servicemanagement_v1_servicemanager_pb.ListServiceConfigsResponse)) {
    throw new Error('Expected argument of type google.api.servicemanagement.v1.ListServiceConfigsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_api_servicemanagement_v1_ListServiceConfigsResponse(buffer_arg) {
  return google_api_servicemanagement_v1_servicemanager_pb.ListServiceConfigsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_servicemanagement_v1_ListServiceRolloutsRequest(arg) {
  if (!(arg instanceof google_api_servicemanagement_v1_servicemanager_pb.ListServiceRolloutsRequest)) {
    throw new Error('Expected argument of type google.api.servicemanagement.v1.ListServiceRolloutsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_api_servicemanagement_v1_ListServiceRolloutsRequest(buffer_arg) {
  return google_api_servicemanagement_v1_servicemanager_pb.ListServiceRolloutsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_servicemanagement_v1_ListServiceRolloutsResponse(arg) {
  if (!(arg instanceof google_api_servicemanagement_v1_servicemanager_pb.ListServiceRolloutsResponse)) {
    throw new Error('Expected argument of type google.api.servicemanagement.v1.ListServiceRolloutsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_api_servicemanagement_v1_ListServiceRolloutsResponse(buffer_arg) {
  return google_api_servicemanagement_v1_servicemanager_pb.ListServiceRolloutsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_servicemanagement_v1_ListServicesRequest(arg) {
  if (!(arg instanceof google_api_servicemanagement_v1_servicemanager_pb.ListServicesRequest)) {
    throw new Error('Expected argument of type google.api.servicemanagement.v1.ListServicesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_api_servicemanagement_v1_ListServicesRequest(buffer_arg) {
  return google_api_servicemanagement_v1_servicemanager_pb.ListServicesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_servicemanagement_v1_ListServicesResponse(arg) {
  if (!(arg instanceof google_api_servicemanagement_v1_servicemanager_pb.ListServicesResponse)) {
    throw new Error('Expected argument of type google.api.servicemanagement.v1.ListServicesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_api_servicemanagement_v1_ListServicesResponse(buffer_arg) {
  return google_api_servicemanagement_v1_servicemanager_pb.ListServicesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_servicemanagement_v1_ManagedService(arg) {
  if (!(arg instanceof google_api_servicemanagement_v1_resources_pb.ManagedService)) {
    throw new Error('Expected argument of type google.api.servicemanagement.v1.ManagedService');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_api_servicemanagement_v1_ManagedService(buffer_arg) {
  return google_api_servicemanagement_v1_resources_pb.ManagedService.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_servicemanagement_v1_Rollout(arg) {
  if (!(arg instanceof google_api_servicemanagement_v1_resources_pb.Rollout)) {
    throw new Error('Expected argument of type google.api.servicemanagement.v1.Rollout');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_api_servicemanagement_v1_Rollout(buffer_arg) {
  return google_api_servicemanagement_v1_resources_pb.Rollout.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_servicemanagement_v1_SubmitConfigSourceRequest(arg) {
  if (!(arg instanceof google_api_servicemanagement_v1_servicemanager_pb.SubmitConfigSourceRequest)) {
    throw new Error('Expected argument of type google.api.servicemanagement.v1.SubmitConfigSourceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_api_servicemanagement_v1_SubmitConfigSourceRequest(buffer_arg) {
  return google_api_servicemanagement_v1_servicemanager_pb.SubmitConfigSourceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_servicemanagement_v1_UndeleteServiceRequest(arg) {
  if (!(arg instanceof google_api_servicemanagement_v1_servicemanager_pb.UndeleteServiceRequest)) {
    throw new Error('Expected argument of type google.api.servicemanagement.v1.UndeleteServiceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_api_servicemanagement_v1_UndeleteServiceRequest(buffer_arg) {
  return google_api_servicemanagement_v1_servicemanager_pb.UndeleteServiceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_longrunning_Operation(arg) {
  if (!(arg instanceof google_longrunning_operations_pb.Operation)) {
    throw new Error('Expected argument of type google.longrunning.Operation');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_longrunning_Operation(buffer_arg) {
  return google_longrunning_operations_pb.Operation.deserializeBinary(new Uint8Array(buffer_arg));
}


// [Google Service Management API](/service-management/overview)
var ServiceManagerService = exports.ServiceManagerService = {
  // Lists managed services.
  //
  // Returns all public services. For authenticated users, also returns all
  // services the calling user has "servicemanagement.services.get" permission
  // for.
  //
  // **BETA:** If the caller specifies the `consumer_id`, it returns only the
  // services enabled on the consumer. The `consumer_id` must have the format
  // of "project:{PROJECT-ID}".
  listServices: {
    path: '/google.api.servicemanagement.v1.ServiceManager/ListServices',
    requestStream: false,
    responseStream: false,
    requestType: google_api_servicemanagement_v1_servicemanager_pb.ListServicesRequest,
    responseType: google_api_servicemanagement_v1_servicemanager_pb.ListServicesResponse,
    requestSerialize: serialize_google_api_servicemanagement_v1_ListServicesRequest,
    requestDeserialize: deserialize_google_api_servicemanagement_v1_ListServicesRequest,
    responseSerialize: serialize_google_api_servicemanagement_v1_ListServicesResponse,
    responseDeserialize: deserialize_google_api_servicemanagement_v1_ListServicesResponse,
  },
  // Gets a managed service. Authentication is required unless the service is
  // public.
  getService: {
    path: '/google.api.servicemanagement.v1.ServiceManager/GetService',
    requestStream: false,
    responseStream: false,
    requestType: google_api_servicemanagement_v1_servicemanager_pb.GetServiceRequest,
    responseType: google_api_servicemanagement_v1_resources_pb.ManagedService,
    requestSerialize: serialize_google_api_servicemanagement_v1_GetServiceRequest,
    requestDeserialize: deserialize_google_api_servicemanagement_v1_GetServiceRequest,
    responseSerialize: serialize_google_api_servicemanagement_v1_ManagedService,
    responseDeserialize: deserialize_google_api_servicemanagement_v1_ManagedService,
  },
  // Creates a new managed service.
  // Please note one producer project can own no more than 20 services.
  //
  // Operation<response: ManagedService>
  createService: {
    path: '/google.api.servicemanagement.v1.ServiceManager/CreateService',
    requestStream: false,
    responseStream: false,
    requestType: google_api_servicemanagement_v1_servicemanager_pb.CreateServiceRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_api_servicemanagement_v1_CreateServiceRequest,
    requestDeserialize: deserialize_google_api_servicemanagement_v1_CreateServiceRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Deletes a managed service. This method will change the service to the
  // `Soft-Delete` state for 30 days. Within this period, service producers may
  // call [UndeleteService][google.api.servicemanagement.v1.ServiceManager.UndeleteService] to restore the service.
  // After 30 days, the service will be permanently deleted.
  //
  // Operation<response: google.protobuf.Empty>
  deleteService: {
    path: '/google.api.servicemanagement.v1.ServiceManager/DeleteService',
    requestStream: false,
    responseStream: false,
    requestType: google_api_servicemanagement_v1_servicemanager_pb.DeleteServiceRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_api_servicemanagement_v1_DeleteServiceRequest,
    requestDeserialize: deserialize_google_api_servicemanagement_v1_DeleteServiceRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Revives a previously deleted managed service. The method restores the
  // service using the configuration at the time the service was deleted.
  // The target service must exist and must have been deleted within the
  // last 30 days.
  //
  // Operation<response: UndeleteServiceResponse>
  undeleteService: {
    path: '/google.api.servicemanagement.v1.ServiceManager/UndeleteService',
    requestStream: false,
    responseStream: false,
    requestType: google_api_servicemanagement_v1_servicemanager_pb.UndeleteServiceRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_api_servicemanagement_v1_UndeleteServiceRequest,
    requestDeserialize: deserialize_google_api_servicemanagement_v1_UndeleteServiceRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Lists the history of the service configuration for a managed service,
  // from the newest to the oldest.
  listServiceConfigs: {
    path: '/google.api.servicemanagement.v1.ServiceManager/ListServiceConfigs',
    requestStream: false,
    responseStream: false,
    requestType: google_api_servicemanagement_v1_servicemanager_pb.ListServiceConfigsRequest,
    responseType: google_api_servicemanagement_v1_servicemanager_pb.ListServiceConfigsResponse,
    requestSerialize: serialize_google_api_servicemanagement_v1_ListServiceConfigsRequest,
    requestDeserialize: deserialize_google_api_servicemanagement_v1_ListServiceConfigsRequest,
    responseSerialize: serialize_google_api_servicemanagement_v1_ListServiceConfigsResponse,
    responseDeserialize: deserialize_google_api_servicemanagement_v1_ListServiceConfigsResponse,
  },
  // Gets a service configuration (version) for a managed service.
  getServiceConfig: {
    path: '/google.api.servicemanagement.v1.ServiceManager/GetServiceConfig',
    requestStream: false,
    responseStream: false,
    requestType: google_api_servicemanagement_v1_servicemanager_pb.GetServiceConfigRequest,
    responseType: google_api_service_pb.Service,
    requestSerialize: serialize_google_api_servicemanagement_v1_GetServiceConfigRequest,
    requestDeserialize: deserialize_google_api_servicemanagement_v1_GetServiceConfigRequest,
    responseSerialize: serialize_google_api_Service,
    responseDeserialize: deserialize_google_api_Service,
  },
  // Creates a new service configuration (version) for a managed service.
  // This method only stores the service configuration. To roll out the service
  // configuration to backend systems please call
  // [CreateServiceRollout][google.api.servicemanagement.v1.ServiceManager.CreateServiceRollout].
  createServiceConfig: {
    path: '/google.api.servicemanagement.v1.ServiceManager/CreateServiceConfig',
    requestStream: false,
    responseStream: false,
    requestType: google_api_servicemanagement_v1_servicemanager_pb.CreateServiceConfigRequest,
    responseType: google_api_service_pb.Service,
    requestSerialize: serialize_google_api_servicemanagement_v1_CreateServiceConfigRequest,
    requestDeserialize: deserialize_google_api_servicemanagement_v1_CreateServiceConfigRequest,
    responseSerialize: serialize_google_api_Service,
    responseDeserialize: deserialize_google_api_Service,
  },
  // Creates a new service configuration (version) for a managed service based
  // on
  // user-supplied configuration source files (for example: OpenAPI
  // Specification). This method stores the source configurations as well as the
  // generated service configuration. To rollout the service configuration to
  // other services,
  // please call [CreateServiceRollout][google.api.servicemanagement.v1.ServiceManager.CreateServiceRollout].
  //
  // Operation<response: SubmitConfigSourceResponse>
  submitConfigSource: {
    path: '/google.api.servicemanagement.v1.ServiceManager/SubmitConfigSource',
    requestStream: false,
    responseStream: false,
    requestType: google_api_servicemanagement_v1_servicemanager_pb.SubmitConfigSourceRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_api_servicemanagement_v1_SubmitConfigSourceRequest,
    requestDeserialize: deserialize_google_api_servicemanagement_v1_SubmitConfigSourceRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Lists the history of the service configuration rollouts for a managed
  // service, from the newest to the oldest.
  listServiceRollouts: {
    path: '/google.api.servicemanagement.v1.ServiceManager/ListServiceRollouts',
    requestStream: false,
    responseStream: false,
    requestType: google_api_servicemanagement_v1_servicemanager_pb.ListServiceRolloutsRequest,
    responseType: google_api_servicemanagement_v1_servicemanager_pb.ListServiceRolloutsResponse,
    requestSerialize: serialize_google_api_servicemanagement_v1_ListServiceRolloutsRequest,
    requestDeserialize: deserialize_google_api_servicemanagement_v1_ListServiceRolloutsRequest,
    responseSerialize: serialize_google_api_servicemanagement_v1_ListServiceRolloutsResponse,
    responseDeserialize: deserialize_google_api_servicemanagement_v1_ListServiceRolloutsResponse,
  },
  // Gets a service configuration [rollout][google.api.servicemanagement.v1.Rollout].
  getServiceRollout: {
    path: '/google.api.servicemanagement.v1.ServiceManager/GetServiceRollout',
    requestStream: false,
    responseStream: false,
    requestType: google_api_servicemanagement_v1_servicemanager_pb.GetServiceRolloutRequest,
    responseType: google_api_servicemanagement_v1_resources_pb.Rollout,
    requestSerialize: serialize_google_api_servicemanagement_v1_GetServiceRolloutRequest,
    requestDeserialize: deserialize_google_api_servicemanagement_v1_GetServiceRolloutRequest,
    responseSerialize: serialize_google_api_servicemanagement_v1_Rollout,
    responseDeserialize: deserialize_google_api_servicemanagement_v1_Rollout,
  },
  // Creates a new service configuration rollout. Based on rollout, the
  // Google Service Management will roll out the service configurations to
  // different backend services. For example, the logging configuration will be
  // pushed to Google Cloud Logging.
  //
  // Please note that any previous pending and running Rollouts and associated
  // Operations will be automatically cancelled so that the latest Rollout will
  // not be blocked by previous Rollouts.
  //
  // Operation<response: Rollout>
  createServiceRollout: {
    path: '/google.api.servicemanagement.v1.ServiceManager/CreateServiceRollout',
    requestStream: false,
    responseStream: false,
    requestType: google_api_servicemanagement_v1_servicemanager_pb.CreateServiceRolloutRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_api_servicemanagement_v1_CreateServiceRolloutRequest,
    requestDeserialize: deserialize_google_api_servicemanagement_v1_CreateServiceRolloutRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Generates and returns a report (errors, warnings and changes from
  // existing configurations) associated with
  // GenerateConfigReportRequest.new_value
  //
  // If GenerateConfigReportRequest.old_value is specified,
  // GenerateConfigReportRequest will contain a single ChangeReport based on the
  // comparison between GenerateConfigReportRequest.new_value and
  // GenerateConfigReportRequest.old_value.
  // If GenerateConfigReportRequest.old_value is not specified, this method
  // will compare GenerateConfigReportRequest.new_value with the last pushed
  // service configuration.
  generateConfigReport: {
    path: '/google.api.servicemanagement.v1.ServiceManager/GenerateConfigReport',
    requestStream: false,
    responseStream: false,
    requestType: google_api_servicemanagement_v1_servicemanager_pb.GenerateConfigReportRequest,
    responseType: google_api_servicemanagement_v1_servicemanager_pb.GenerateConfigReportResponse,
    requestSerialize: serialize_google_api_servicemanagement_v1_GenerateConfigReportRequest,
    requestDeserialize: deserialize_google_api_servicemanagement_v1_GenerateConfigReportRequest,
    responseSerialize: serialize_google_api_servicemanagement_v1_GenerateConfigReportResponse,
    responseDeserialize: deserialize_google_api_servicemanagement_v1_GenerateConfigReportResponse,
  },
  // Enables a [service][google.api.servicemanagement.v1.ManagedService] for a project, so it can be used
  // for the project. See
  // [Cloud Auth Guide](https://cloud.google.com/docs/authentication) for
  // more information.
  //
  // Operation<response: EnableServiceResponse>
  enableService: {
    path: '/google.api.servicemanagement.v1.ServiceManager/EnableService',
    requestStream: false,
    responseStream: false,
    requestType: google_api_servicemanagement_v1_servicemanager_pb.EnableServiceRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_api_servicemanagement_v1_EnableServiceRequest,
    requestDeserialize: deserialize_google_api_servicemanagement_v1_EnableServiceRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Disables a [service][google.api.servicemanagement.v1.ManagedService] for a project, so it can no longer be
  // be used for the project. It prevents accidental usage that may cause
  // unexpected billing charges or security leaks.
  //
  // Operation<response: DisableServiceResponse>
  disableService: {
    path: '/google.api.servicemanagement.v1.ServiceManager/DisableService',
    requestStream: false,
    responseStream: false,
    requestType: google_api_servicemanagement_v1_servicemanager_pb.DisableServiceRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_api_servicemanagement_v1_DisableServiceRequest,
    requestDeserialize: deserialize_google_api_servicemanagement_v1_DisableServiceRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
};

exports.ServiceManagerClient = grpc.makeGenericClientConstructor(ServiceManagerService);
