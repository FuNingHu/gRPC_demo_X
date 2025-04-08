import sys
import grpc
import hello_pb2
import hello_pb2_grpc
from socketserver import ThreadingMixIn
from xmlrpc.server import SimpleXMLRPCServer
from xmlrpc.server import SimpleXMLRPCRequestHandler

XMLRPC_PORT = 50050


def run():
    try:
        channel = grpc.insecure_channel('host.docker.internal:50051')
        stub = hello_pb2_grpc.GreeterStub(channel)
        response = stub.SayHello(hello_pb2.HelloRequest(name='I am World'))
        print("Greeter client received: " + response.message)
        return response.message
    except Exception as e:
        print(f"Error in run function: {e}")
        return f"Error in run function: {e}"

def getResponse():
    return run()
    # return 'calling run()'

class RequestHandler(SimpleXMLRPCRequestHandler):
    rpc_path = ('/',)

class MultithreadedSimpleXMLRPCServer(ThreadingMixIn, SimpleXMLRPCServer):
	pass

sys.stdout.write("gRPC daemon started")
sys.stderr.write("gRPC daemon started")

server = MultithreadedSimpleXMLRPCServer(("0.0.0.0", XMLRPC_PORT))
server.RequestHandlerClass.protocol_version = "HTTP/1.1"
server.register_function(getResponse, "getResponse")
server.serve_forever()

# if __name__ == '__main__':
#     run()
