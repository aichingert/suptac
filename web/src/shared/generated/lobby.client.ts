// @generated by protobuf-ts 2.9.3 with parameter optimize_code_size
// @generated from protobuf file "lobby.proto" (package "lobby", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { Lobby } from "./lobby";
import type { ChannelState } from "./lobby";
import type { ServerStreamingCall } from "@protobuf-ts/runtime-rpc";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { AvailableChannels } from "./lobby";
import type { Empty } from "./lobby";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service lobby.Lobby
 */
export interface ILobbyClient {
    /**
     * @generated from protobuf rpc: GetAvailableChannels(lobby.Empty) returns (lobby.AvailableChannels);
     */
    getAvailableChannels(input: Empty, options?: RpcOptions): UnaryCall<Empty, AvailableChannels>;
    /**
     * @generated from protobuf rpc: GetChannelStates(lobby.Empty) returns (stream lobby.ChannelState);
     */
    getChannelStates(input: Empty, options?: RpcOptions): ServerStreamingCall<Empty, ChannelState>;
}
/**
 * @generated from protobuf service lobby.Lobby
 */
export class LobbyClient implements ILobbyClient, ServiceInfo {
    typeName = Lobby.typeName;
    methods = Lobby.methods;
    options = Lobby.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: GetAvailableChannels(lobby.Empty) returns (lobby.AvailableChannels);
     */
    getAvailableChannels(input: Empty, options?: RpcOptions): UnaryCall<Empty, AvailableChannels> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<Empty, AvailableChannels>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetChannelStates(lobby.Empty) returns (stream lobby.ChannelState);
     */
    getChannelStates(input: Empty, options?: RpcOptions): ServerStreamingCall<Empty, ChannelState> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<Empty, ChannelState>("serverStreaming", this._transport, method, opt, input);
    }
}
