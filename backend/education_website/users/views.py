from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_201_CREATED, HTTP_500_INTERNAL_SERVER_ERROR

from .serializers import UserSerializer

class RegistrationView(APIView):
    def post(self, request):
        serialized_data = UserSerializer(data=request.data)
        if (serialized_data.is_valid()):
            serialized_data.save()
            return Response({"message": "User have been registered successfully"}, status=HTTP_201_CREATED)
        print(serialized_data.errors)
        return Response({"message": "Something went wrong", "errors": serialized_data.error_messages},
                        status=HTTP_500_INTERNAL_SERVER_ERROR)
