<<<<<<< HEAD
# Angular contribution

This project is a template example of a URCap Contribution containing a Docker backend and a Web frontend
# **System overview**:
![image](https://github.com/user-attachments/assets/9f67ac99-a260-4f15-a802-e80ff3435a5b)



### Installation
To install the contribution type:

`$ npm install`

### Build
To build the contribution type:

`$ npm run build`

### Deploy
To deploy the contribution to the simulator type:

`$ npm run install-urcap -- --port <your ursim port number>`

## Further help

Get more help from the included SDK documentation.
=======
# gRPC_demo_X
this example project demonstrate an approach to implement gRPC client in Polyscope X to call service on host machine gRPC server with dockerized daemon.
implementation with X SDK [0.15.59] and tested on URSIM [10.8.0-beta.1]

to setup this demo, you will need an IDE running gRPC server python on host machine(in this project case) or in another remote controller(with specific IP address). 
the example gRPC server.py is like below:
      
      
      import grpc
      from concurrent import futures
      import hello_pb2
      import hello_pb2_grpc
      class Greeter(hello_pb2_grpc.GreeterServicer):
          def SayHello(self, request, context):
              return hello_pb2.HelloReply(message='Hello, %s!' % request.name)
      
      
      def serve():
          server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
          hello_pb2_grpc.add_GreeterServicer_to_server(Greeter(), server)
          server.add_insecure_port('[::]:50051')
          server.start()
          print("Server started, listening on port 50051")
          server.wait_for_termination()
      
      
      if __name__ == '__main__':
          serve()

in addition: it should be the same hello_pb2.py, and hello_pb2_grpc.py in both server & client folder.
a typical hello.proto script is like below:
      
      syntax = "proto3";
      package helloworld;
      
      // 定义请求消息 //define request message
      message HelloRequest {
        string name = 1;
      }
      
      // 定义响应消息 //define response message
      message HelloReply {
        string message = 1;
      }
      
      // 定义服务 //define service
      service Greeter {
        // 定义服务方法 //define methode
        rpc SayHello (HelloRequest) returns (HelloReply);
      }

>>>>>>> 28f25dac41277912dcdc09fbae696bf8c715746f
