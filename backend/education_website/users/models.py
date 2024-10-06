from django.db import models
from django.contrib.auth.models import AbstractUser, Group
from django.core.validators import MaxValueValidator
from django.core.exceptions import ValidationError


def validate_file_extension(value):
    if not value.name.endswith(('.png', '.jpg', '.jpeg', '.pdf')):
        raise ValidationError('Only image or PDF files are allowed.')
def validate_image_extension(value):
    if not value.name.endswith(('.png', '.jpg', '.jpeg',".svg")):
        raise ValidationError('Only image or PDF files are allowed.')

class CustomUser(AbstractUser):
    groups = models.ManyToManyField(
        Group,
        related_name='custom_user_set',
        blank=True,
        help_text='The groups this user belongs to.',
        verbose_name='groups',
    )

    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='custom_user_set',
        blank=True,
        help_text='Specific permissions for this user.',
        verbose_name='user permissions',
    )

    role = models.ForeignKey(
        Group, on_delete=models.PROTECT, null=False, related_name="users")
    profile_image = models.ImageField(
        upload_to="users/info", null=True, blank=True, validators=[validate_image_extension])

    def __str__(self):
        return f"{self.first_name} {self.last_name}"


class Subject(models.Model):
    name = models.CharField(max_length=100)
    expert = models.ManyToManyField(CustomUser, related_name="subjects")

    def __str__(self):
        return f"{self.name}"


class EducatorVerifications(models.Model):
    user = models.OneToOneField(
        CustomUser, on_delete=models.CASCADE, primary_key=True, related_name="verified_educator")
    id_document = models.ImageField(
        upload_to="user/documents", validators=[validate_file_extension])
    test_score = models.PositiveIntegerField(
        default=0, validators=[MaxValueValidator(100)])

    def __str__(self):
        return f"{self.user.first_name} {self.user.last_name}"


class Questions(models.Model):
    question_text = models.TextField(blank=True, null=True)
    question_image = models.ImageField(
        upload_to="user/questions", blank=True, null=True, validators=[validate_file_extension])
    subject = models.ForeignKey(
        Subject, related_name="questions", on_delete=models.CASCADE)
    asked_by = models.ForeignKey(
        CustomUser, related_name="questions", on_delete=models.PROTECT)

    def __str__(self):
        return f"{self.subject} - {self.pk}"


class Answers(models.Model):
    answer_text = models.TextField(blank=True, null=True)
    answer_image = models.ImageField(
        upload_to="user/answers", blank=True, null=True, validators=[validate_file_extension])
    questions = models.ForeignKey(
        Questions, related_name="answers", on_delete=models.CASCADE)
    answered_by = models.ForeignKey(
        CustomUser, related_name="answers", on_delete=models.PROTECT)

    def __str__(self):
        return f"{self.questions} - {self.pk}"
