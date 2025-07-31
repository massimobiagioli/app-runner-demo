variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "app_name" {
  description = "Name of the application"
  type        = string
}

variable "github_repository_url" {
  description = "GitHub repository URL"
  type        = string
}

variable "github_branch" {
  description = "GitHub branch to deploy"
  type        = string
  default     = "main"
}

variable "source_directory" {
  description = "Directory containing the application source code"
  type        = string
  default     = "code"
}

variable "auto_deployments_enabled" {
  description = "Enable automatic deployments"
  type        = bool
  default     = true
}

variable "cpu" {
  description = "CPU units for the App Runner service"
  type        = string
  default     = "0.25 vCPU"
}

variable "memory" {
  description = "Memory for the App Runner service"
  type        = string
  default     = "0.5 GB"
}

variable "tags" {
  description = "Tags to apply to resources"
  type        = map(string)
  default     = {}
}