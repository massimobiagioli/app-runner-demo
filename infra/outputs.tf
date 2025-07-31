output "app_runner_service_url" {
  description = "The URL of the App Runner service"
  value       = "https://${aws_apprunner_service.app.service_url}"
}

output "app_runner_service_arn" {
  description = "The ARN of the App Runner service"
  value       = aws_apprunner_service.app.arn
}

output "app_runner_service_id" {
  description = "The ID of the App Runner service"
  value       = aws_apprunner_service.app.service_id
}

output "app_runner_service_status" {
  description = "The status of the App Runner service"
  value       = aws_apprunner_service.app.status
}

output "github_connection_arn" {
  description = "The ARN of the GitHub connection"
  value       = aws_apprunner_connection.github.arn
}

output "github_connection_status" {
  description = "The status of the GitHub connection"
  value       = aws_apprunner_connection.github.status
}