from django.conf import settings
from django.core.mail import send_mail
from celery import shared_task
from django.http import BadHeaderError


@shared_task
def send_email_message(email, subject, message):
    try:
        send_mail(subject, message, settings.DEFAULT_FROM_EMAIL, [email])
    except BadHeaderError:
        pass
