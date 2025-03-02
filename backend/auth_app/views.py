from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from django.contrib.auth.models import User
from .serializers import SignupSerializer
from django.contrib.auth import authenticate
from django.http import JsonResponse
from rest_framework.authtoken.models import Token
@api_view(["POST"])
def signup(request):
    serializer = SignupSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "User registered successfully"}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)






@api_view(["POST"])
def login_view(request):
    email = request.data.get("email")
    password = request.data.get("password")

   
    try:
        user = User.objects.get(email=email)  
    except User.DoesNotExist:
        return JsonResponse({"error": "Invalid credentials"}, status=400)

   
    user = authenticate(username=user.username, password=password)

    if user is not None:
        token, _ = Token.objects.get_or_create(user=user)
        return JsonResponse({"token": token.key, "message": "Login successful"}, status=200)
    else:
        return JsonResponse({"error": "Invalid credentials"}, status=400)