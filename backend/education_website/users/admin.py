from django.contrib import admin
from .models import CustomUser

# Register your models here.


class CustomUserAdmin(admin.ModelAdmin):
    fields = ["first_name", "last_name", "email", "password", "role"]


admin.site.register(CustomUser, CustomUserAdmin)
