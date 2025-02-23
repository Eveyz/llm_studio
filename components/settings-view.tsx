import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RefreshCw } from "lucide-react"

export function SettingsView() {
  return (
    <div className="p-4 space-y-8">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Model Settings</h2>
          <Button variant="ghost" size="icon">
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Temperature</Label>
            <Slider defaultValue={[50]} max={100} step={1} />
          </div>

          <div className="space-y-2">
            <Label>Context</Label>
            <Slider defaultValue={[30]} max={100} step={1} />
          </div>

          <div className="flex items-center justify-between">
            <Label>Stream output</Label>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <Label>Enable max tokens limit</Label>
            <Switch />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Message Settings</h2>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label>Show divider between messages</Label>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <Label>Use serif font</Label>
            <Switch />
          </div>

          <div className="flex items-center justify-between">
            <Label>Show line numbers in code</Label>
            <Switch />
          </div>

          <div className="flex items-center justify-between">
            <Label>Code block collapsible</Label>
            <Switch />
          </div>

          <div className="space-y-2">
            <Label>Message style</Label>
            <Select defaultValue="plain">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="plain">Plain</SelectItem>
                <SelectItem value="bubble">Bubble</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Group style</Label>
            <Select defaultValue="fold">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fold">Fold</SelectItem>
                <SelectItem value="expand">Expand</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Code style</Label>
            <Select defaultValue="auto">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="auto">Auto</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="light">Light</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Math engine</Label>
            <Select defaultValue="katex">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="katex">KaTeX</SelectItem>
                <SelectItem value="mathjax">MathJax</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Message font size</Label>
            <Slider defaultValue={[50]} max={100} step={1} />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Input Settings</h2>
        {/* Add input settings here */}
        <div className="flex items-center justify-between">
					<Label>Show estimated tokens</Label>
					<Switch />
				</div>
				<div className="flex items-center justify-between">
					<Label>Paste long text as file</Label>
					<Switch />
				</div>
				<div className="flex items-center justify-between">
					<Label>Markdown render input message</Label>
					<Switch />
				</div>

				<div className="space-y-2">
            <Label>Target language</Label>
            <Select defaultValue="katex">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="katex">KaTeX</SelectItem>
                <SelectItem value="mathjax">MathJax</SelectItem>
              </SelectContent>
            </Select>
          </div>

					<div className="space-y-2">
            <Label>Send shortcuts</Label>
            <Select defaultValue="katex">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="katex">KaTeX</SelectItem>
                <SelectItem value="mathjax">MathJax</SelectItem>
              </SelectContent>
            </Select>
          </div>
      </div>
    </div>
  )
}

