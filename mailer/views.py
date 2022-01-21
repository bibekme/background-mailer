from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import MailSerializer
from mailer.tasks import send_email_message


@api_view(["POST"])
def send_message(request):
    serializer = MailSerializer(data=request.data)
    if serializer.is_valid():
        email = serializer.validated_data.get("email")
        subject = serializer.validated_data.get("subject")
        message = serializer.validated_data.get("message")
        send_email_message.delay(email, subject, message)
        return Response(
            {"message": "Email sent successfully."}, status=status.HTTP_200_OK
        )
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
